import SectionTitle from '@/components/SectionTitle.tsx';

interface SafetyProps {
  title: string
  contentTitle: string
  contentList: string[]
}

export default function Safety({ title, contentTitle, contentList }: SafetyProps) {
  return (
    <div className="mx-auto w-[80vw]">
      <SectionTitle title={title} />

      <div className="mb-20 bg-[#E6F2FF] p-4 md:px-30 md:py-14">
        <p className="mb-10 text-[24px]">
          {contentTitle}
        </p>
        {
          contentList.map((item, index) => (
            <p key={index} className={`${index === 0 ? '' : 'mt-2'} text-[14px] text-[#333333]`}>
              {item}
            </p>
          ))
        }
      </div>
    </div>
  );
}
