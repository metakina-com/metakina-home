import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    {
      key: 'accounts',
      hasItems: false,
      hasMultipleParagraphs: true,
      paragraphs: 4,
    },
    {
      key: 'intellectual',
      hasItems: false,
      hasMultipleParagraphs: false,
    },
    {
      key: 'links',
      hasItems: false,
      hasMultipleParagraphs: true,
      paragraphs: 3,
    },
    {
      key: 'termination',
      hasItems: false,
      hasMultipleParagraphs: true,
      paragraphs: 3,
    },
    {
      key: 'indemnification',
      hasItems: false,
      hasMultipleParagraphs: false,
    },
    {
      key: 'limitation',
      hasItems: false,
      hasMultipleParagraphs: false,
    },
    {
      key: 'disclaimer',
      hasItems: false,
      hasMultipleParagraphs: true,
      paragraphs: 2,
    },
    {
      key: 'governing',
      hasItems: false,
      hasMultipleParagraphs: true,
      paragraphs: 2,
    },
    {
      key: 'changes',
      hasItems: false,
      hasMultipleParagraphs: true,
      paragraphs: 2,
    },
    {
      key: 'contact',
      hasItems: false,
      hasMultipleParagraphs: false,
      hasEmail: true,
      paragraphs: 0,
    },
  ];

  return (
    <div className="py-20 text-white">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="mb-4 text-center text-3xl font-bold">{t('terms.title')}</h1>
        <p className="mb-8 text-right text-lg text-white">{t('terms.lastUpdated')}</p>

        <div className="mb-8">
          <p className="mb-4 text-white leading-relaxed">{t('terms.intro.paragraph1')}</p>
          <p className="mb-4 text-white leading-relaxed">{t('terms.intro.paragraph2')}</p>
          <p className="text-white leading-relaxed">{t('terms.intro.paragraph3')}</p>
        </div>

        {sections.map(section => (
          <div key={section.key} className="mb-10">
            <h2 className="mb-4 text-xl font-bold">{t(`terms.${section.key}.title`)}</h2>

            {section.hasMultipleParagraphs
              ? (
                  <>
                    {Array.from({ length: section.paragraphs || 0 }, (_, idx) => (
                      <p key={idx} className="mb-4 text-white leading-relaxed">
                        {t(`terms.${section.key}.paragraph${idx + 1}`)}
                      </p>
                    ))}
                  </>
                )
              : (
                  <p className="text-white leading-relaxed">
                    {t(`terms.${section.key}.content`)}
                    {section.hasEmail && (
                      <span className="text-blue-600 font-medium">{t(`terms.${section.key}.email`)}</span>
                    )}
                  </p>
                )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfService;
