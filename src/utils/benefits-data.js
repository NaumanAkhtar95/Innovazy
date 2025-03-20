import Compensation from "../assets/icons/compensation.png"
import Retirement from "../assets/icons/retirement.png"
import Health from "../assets/icons/health.png"
import WorkLife from "../assets/icons/workLife.png"

export const benefitData = (t) =>[
  {
    title: t("sectionSix.cards.cardOne.title"),
    description:
    t("sectionSix.cards.cardOne.desc"),
    image: Compensation,
  },
  {
    title:t("sectionSix.cards.cardTwo.title"),
    description:
    t("sectionSix.cards.cardTwo.desc"),
    image: Health,
  },
  {
    title: t("sectionSix.cards.cardThree.title"),
    description:
    t("sectionSix.cards.cardThree.desc"),
    image: Retirement,
  },
  {
    title: t("sectionSix.cards.cardFour.title"),
    description:
    t("sectionSix.cards.cardFour.desc"),
    image: WorkLife,
  },
]
