import style from "./appHeader.module.scss"
import AppLogo from "../logo/AppLogo"
import profile from "@public/profile.svg"
import Image from "next/image"
import { usePopper } from "react-popper"
import { useState } from "react"
import ProfileDropdown from "./ProfileDropdown"
import arrow from "@public/arrow.png"

export default function AppHeader() {
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const [arrowElement, setArrowElement] = useState(null)
  const [showSettings, setShowSettings] = useState(false)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    placement: 'bottom-end'
  })


  return (
    <div className={style['app-header']}>
      <h1><AppLogo variant="medium" /></h1>
      <Image
        src={profile}
        alt="Profile"
        ref={setReferenceElement}
        onClick={() => setShowSettings(!showSettings)}
      />
      {showSettings &&
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <Image
            src={arrow}
            alt="dropdown arrow"
            ref={setArrowElement}
            style={styles.arrow}
          />
          <ProfileDropdown />
        </div>
      }
    </div>
  )
}
