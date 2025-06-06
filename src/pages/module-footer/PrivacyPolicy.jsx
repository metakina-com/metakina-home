import { useTranslation } from 'react-i18next';

function PrivacyPolicy() {
  const { t } = useTranslation();

  const text = [
    {
      title: t('privacy.section1.title'),
      content: t('privacy.section1.content'),
      subhead: t('privacy.section1.subhead'),
      children: [
        t('privacy.section1.item1'),
        t('privacy.section1.item2'),
        t('privacy.section1.item3'),
        t('privacy.section1.item4'),
        t('privacy.section1.item5'),
      ],
      annotation: t('privacy.section1.annotation'),
    },
    {
      title: t('privacy.section2.title'),
      content: t('privacy.section2.content'),
      children: [t('privacy.section2.item1'), t('privacy.section2.item2'), t('privacy.section2.item3')],
      annotation: t('privacy.section2.annotation'),
    },
    {
      title: t('privacy.section3.title'),
      content: t('privacy.section3.content'),
      children: [t('privacy.section3.item1'), t('privacy.section3.item2')],
      annotation: t('privacy.section3.annotation'),
    },
    {
      title: t('privacy.section4.title'),
      content: t('privacy.section4.content'),
      annotation: t('privacy.section4.annotation'),
    },
    {
      title: t('privacy.section5.title'),
      content: t('privacy.section5.content'),
    },
    {
      title: t('privacy.section6.title'),
      content: t('privacy.section6.content'),
      children: [t('privacy.section6.item1'), t('privacy.section6.item2'), t('privacy.section6.item3')],
      annotation: t('privacy.section6.annotation'),
    },
    {
      title: t('privacy.section7.title'),
      content: t('privacy.section7.content'),
    },
    {
      title: t('privacy.section8.title'),
      content: `${t('privacy.section8.content')}： `,
      email: t('privacy.section8.email'),
    },
  ];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-2xl text-white">
        <h1 className="text-center text-3xl font-bold">{t('privacy.title')}</h1>
        <h2 className="mt-2 text-right text-xl">
          {' '}
          {t('privacy.effectiveDate')}
          ：
          {t('privacy.dateFormat')}
        </h2>
        <p className="mt-10 indent-8">{t('privacy.intro')}</p>
        {text.map((item, index) => (
          <div key={index} className="mt-10">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-2">
              {item.content}
              {' '}
              <span className="text-blue-600">{item.email}</span>
            </p>
            {item.subhead && <h3 className="mt-4 font-semibold">{item.subhead}</h3>}
            {item.children && (
              <ul className="mt-2 list-disc list-inside">
                {item.children.map((child, idx) => (
                  <li key={idx}>{child}</li>
                ))}
              </ul>
            )}
            {item.annotation && <p className="mt-2 text-gray-500 italic">{item.annotation}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
