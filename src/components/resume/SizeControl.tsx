import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ResumeSizeControl({ onChange }: { onChange: (val: string) => void }) {
  const t = useTranslations('resume');
  const [condensed, setCondensed] = useState(true);

  const handleSizeChange = () => {
    const proseClass = condensed ? '' : 'prose-sm';
    onChange(proseClass);
    setCondensed(!condensed);
  };

  return (
    <label className="label cursor-pointer inline-flex gap-4">
      <span className="label-text">{t('condense-button')}</span>
      <input
        type="checkbox"
        className="toggle toggle-xs"
        checked={condensed}
        onChange={handleSizeChange}
      />
    </label>
  );
}
