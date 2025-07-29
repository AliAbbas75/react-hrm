import { Card, CardContent, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {

    return (

        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex w-full h-screen items-center justify-center">
                <Card className="w-full h-full text-center shadow-lg !rounded-none">
                    <CardContent className="py-10">
                        <div className=" flex flex-col justify-center items-center w-full h-full ">
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{
                                    rotate: [0, 10, -8, 6, -4, 2, 0],
                                    scale: [1, 1.5]
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    times: [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
                                    repeat: Infinity,
                                    repeatDelay: 4,
                                }}
                                style={{ display: "inline-block", transformOrigin: "70% 70%" }}
                            >

                                <h1 className="mt-6 text-8xl font-bold tracking-tight animated-heading">404</h1>
                            </motion.div>

                        </div>
                        <p className="mt-3 text-muted-foreground text-3xl">Page not found</p>
                        <p className="mt-1 text-xl">
                            Sorry, the page you`re looking for doesn`t exist.
                        </p>

                        <Link to="/">
                            <Button className="mt-6 h-16 w-60">Go back home</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
            <div className="bg-muted relative hidden lg:block">
                <img
                    src="https://images.unsplash.com/photo-1625470496744-a01bf36a262f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image"
                    className="absolute opacity-80 inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    );
}
