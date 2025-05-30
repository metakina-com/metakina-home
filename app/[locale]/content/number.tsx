import flexible1Img from "@/public/home/flexible1.png"
import flexible2Img from "@/public/home/flexible2.png"
import flexible3Img from "@/public/home/flexible3.png"
import number1Img from "@/public/home/number1.png"
import number2Img from "@/public/home/number2.png"
import number3Img from "@/public/home/number3.png"
import rectangleImg from "@/public/home/rectangle.png"
import vectorImg from "@/public/home/vector.png"
import vector1Img from "@/public/home/vector1.png"
import vector2Img from "@/public/home/vector2.png"
import vector3Img from "@/public/home/vector3.png"
import vector4Img from "@/public/home/vector4.png"
import { useTranslations } from "next-intl"
import React from "react"

const RWACooperationPlan = () => {
  const t = useTranslations("RWACooperation")

  // 合作计划数据-
  const cooperationPlans = [
    {
      id: 1,
      icon: number1Img,
      title: t("plans.registered.title"),
      description: t("plans.registered.description"),
    },
    {
      id: 2,
      icon: number2Img,
      title: t("plans.certified.title"),
      description: t("plans.certified.description"),
    },
    {
      id: 3,
      icon: number3Img,
      title: t("plans.premium.title"),
      description: t("plans.premium.description"),
    },
  ]

  // 合作模式数据
  const cooperationModes = [
    {
      id: 1,
      icon: flexible1Img,
      title: t("modes.modular.title"),
      description: t("modes.modular.description"),
    },
    {
      id: 2,
      icon: flexible2Img,
      title: t("modes.customized.title"),
      description: t("modes.customized.description"),
    },
    {
      id: 3,
      icon: flexible3Img,
      title: t("modes.transparent.title"),
      description: t("modes.transparent.description"),
    },
  ]

  // 合作流程步骤
  const processSteps = [
    { id: 1, icon: vectorImg, label: t("process.consultation") },
    { id: 2, icon: vector1Img, label: t("process.evaluation") },
    { id: 3, icon: vector2Img, label: t("process.design") },
    { id: 4, icon: vector3Img, label: t("process.agreement") },
    { id: 5, icon: vector4Img, label: t("process.execution") },
  ]

  return (
    <div className="pt-20 md:pt-32 w-[85vw]  px-8 md:px-16 lg:px-24 text-white">
      {/* 第一部分：元话RWA数字投行合作计划 */}
      <section className="text-center ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-[#D900FF]">{t("title")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 md:pt-28">
          {cooperationPlans.map((plan) => (
            <div
              key={plan.id}
              className="group"
              style={{ background: `url(${rectangleImg.src}) no-repeat center center/100% 100%` }}
            >
              <div className="rounded-2xl p-8  hover:border-purple-400/70 transition-all duration-300">
                {/* Icon占位符 */}
                <div className="flex items-center justify-center mb-4 mx-auto">
                  <img src={plan.icon.src} alt={plan.title} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{plan.title}</h3>

                <p className="text-gray-300 text-sm leading-relaxed">{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 第二部分：灵活的合作模式 */}
      <section className="text-center pt-20 md:pt-32">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-[#D900FF] mb-12">{t("flexibleMode")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cooperationModes.map((mode) => (
            <div
              key={mode.id}
              className=" group"
              style={{ background: `url(${rectangleImg.src}) no-repeat center center/100% 100%` }}
            >
              {/* 卡片内容 */}
              <div className="  p-8 h-full hover:border-purple-400/70 transition-all duration-300 flex justify-center items-center">
                {/* Icon占位符 */}
                <div className="flex items-center justify-center mr-4 my-8">
                  <img src={mode.icon.src} alt={mode.title} />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white mb-3">{mode.title}</h3>

                  <p className="text-gray-300 text-sm leading-relaxed">{mode.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 第三部分：合作流程 */}
      <section className="mt-16 ">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* 左侧标题 */}
            <h3 className="text-2xl font-semibold text-white">{t("processTitle")}</h3>

            {/* 中间流程步骤 */}
            <div className="flex items-center gap-4 md:gap-8">
              {processSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center gap-2">
                    {/* Icon占位符 */}
                    <div className="flex items-center justify-center mb-4 mx-auto">
                      <img src={step.icon.src} alt={step.label} />
                    </div>
                    <span className={`text-xs ${index == 0 ? "text-[#2F4EE8]" : "text-white"}`}>{step.label}</span>
                  </div>

                  {/* 箭头分隔符 */}
                  {index < processSteps.length - 1 && <span className="text-white hidden md:block">→</span>}
                </React.Fragment>
              ))}
            </div>

            {/* 右侧按钮 */}
            <button className="bg-gradient-to-b from-[#D900FF] to-[#2F4EE8] text-white px-6 py-3 rounded-lg font-medium hover:from-[#C800E8] hover:to-[#2A47D0] transition-all duration-300 whitespace-nowrap">
              {t("getDetailButton")}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RWACooperationPlan
