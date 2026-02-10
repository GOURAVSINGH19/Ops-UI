import React from 'react'
import { BadgePlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { buttonVariants, containerVariants, textVariants } from '../../lib/variants'

const Home = () => {
    return (
        <section className='w-full h-full flex items-center mt-[4vw] flex-col space-y-4'>
            <motion.div
                className='w-full flex-col flex justify-center items-center'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className=' mt-20 lg:mt-10 w-fit backdrop-blur-2xl bg-white/10 border border-white/10 lg:w-[32%] px-2 md:px-4 py-1 rounded-2xl flex items-center justify-center gap-3 mb-5 shadow-[var(--shadow-sm)]'
                    variants={textVariants}
                >
                    <p className=' text-[8px] md:text-[10px]'>A modern UI library designed for speed, flexibility, and simplicity.</p>
                </motion.div>
                <motion.h1
                    className=' font-serif text-[3rem] md:text-[5.5vw] line-clamp-2 leading-[110%] capitalize'
                    variants={textVariants}
                >
                    Build beautiful
                </motion.h1>
                <motion.h1
                    className=' font-serif text-[2.2rem] md:text-[4.5vw] line-clamp-2 leading-[110%] capitalize mb-5'
                    variants={textVariants}
                >
                    consistent UIs — fast.
                </motion.h1>
            </motion.div>
            <motion.div
                className='btn_container w-full leading-[130%] flex justify-center items-center gap-4 mt-4'
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.6,
                        },
                    },
                }}
            >
                <motion.div variants={buttonVariants}>
                    <Link to="/docs/introduction">
                        <button className='px-8 ring-1 ring-white/50 bg-[#fff] dark:ring-[.5px] dark:ring-white/20 dark:bg-[var(--bg)] hover:bg-neutral-50 py-2 text-sm  rounded-full flex items-start gap-2 w-max shadow-[var(--shadow-m)] hover:shadow-[var(--shadow-s)] cursor-pointer dark:text-white duration-600 ease-inOut'>
                            Get Started
                        </button>
                    </Link>
                </motion.div>
                <motion.div variants={buttonVariants}>
                    <Link to="/add"
                    >
                        <button className=' px-3 py-2 text-sm dark:ring-[.5px] dark:ring-white/20 flex items-center justify-center dark:bg-[var(--bg)] ring-1 ring-white/50 bg-[#fff]  rounded-full gap-2 w-max shadow-[var(--shadow-m)] cursor-pointer hover:shadow-[var(--shadow-s)] duration-600 ease-inOut'>
                            <BadgePlus className='w-3 h-3' />
                            Add Component
                        </button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Home
