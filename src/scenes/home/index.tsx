import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assests/SponsorFortune.png"

type Props = {
  setSelectedPage: (value: string) => void,
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <div>
        {/* MAIN HEADER */}
        <div>
          {/* HEADINGS */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Quisque euismod, libero vel imperdiet facilisis, 
              odio nunc vulputate quam, sit amet fermentum urna 
              est eget purus.
            </p>
          </div>

          {/* ACTIONS */}
          <div>
            <ActionButton
              setSelectedPage={setSelectedPage}
            >
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-primary-300"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>

          {/* IMAGE */}
          <div>
            <img src={HomePageGraphic} alt="home-pageGraphic" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home