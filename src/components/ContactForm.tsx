import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { Loader2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TURNSTILE_SITE_KEY as SITE_KEY } from '@/lib/contact';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'w-full rounded-xl border border-border/70 bg-white/60 px-4 py-3 text-sm outline-none transition ' +
  'placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:bg-white/90 disabled:opacity-60';

const ContactForm: React.FC<{ className?: string }> = ({ className }) => {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const turnstile = useRef<TurnstileInstance>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) {
      setError('認証が完了するまでお待ちください。');
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          token,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || '送信に失敗しました。');
      form.reset();
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : '送信に失敗しました。');
    } finally {
      setToken('');
      turnstile.current?.reset();
    }
  };

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn('glass-card rounded-3xl p-8 text-center', className)}
      >
        <p className="text-lg font-semibold">送信しました</p>
        <p className="mt-2 text-sm text-muted-foreground">お問い合わせありがとうございます。折り返しご連絡します。</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          続けて送る
        </button>
      </motion.div>
    );
  }

  const sending = status === 'sending';

  return (
    <form onSubmit={onSubmit} className={cn('glass-card rounded-3xl p-6 space-y-4', className)} noValidate={false}>
      <div className="space-y-1.5">
        <label htmlFor="contact-name" className="text-xs font-semibold text-muted-foreground">
          お名前
        </label>
        <input id="contact-name" name="name" required maxLength={100} autoComplete="name" disabled={sending} className={inputClass} />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-email" className="text-xs font-semibold text-muted-foreground">
          メールアドレス
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          disabled={sending}
          className={inputClass}
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-xs font-semibold text-muted-foreground">
          内容
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          disabled={sending}
          className={cn(inputClass, 'resize-y leading-relaxed')}
        />
      </div>

      {SITE_KEY ? (
        <Turnstile
          ref={turnstile}
          siteKey={SITE_KEY}
          options={{ language: 'ja', size: 'flexible' }}
          onSuccess={setToken}
          onExpire={() => setToken('')}
          onError={() => {
            setToken('');
            setError('認証に失敗しました。ページを再読み込みしてください。');
          }}
        />
      ) : (
        <p className="text-xs text-destructive">Turnstile のサイトキーが設定されていません。</p>
      )}

      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending || !token}
        className={cn(
          'group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background',
          'transition-all hover:-translate-y-0.5 hover:shadow-md disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none',
        )}
      >
        {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
        {sending ? '送信中…' : '送信する'}
      </button>
    </form>
  );
};

export default ContactForm;
