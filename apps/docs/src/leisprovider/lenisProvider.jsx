import React from 'react'
import { useEffect, useRef } from 'react'
import ReactLenis from "lenis/react"
import gsap from 'gsap'

const LenisProvider = ({ children }) => {
    const lenisRef = useRef(null)
    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000)
        }
        gsap.ticker.add(update)
        return () => {
            gsap.ticker.remove(update)
        }
    }, [])
    return (
        <>
            <ReactLenis root options={{ autoRaf: true, allowNestedScroll: true, syncTouch: false, smoothWheel: true, lerp: .1 }} ref={lenisRef} />
            {children}
        </>
    )
}

export default LenisProvider
