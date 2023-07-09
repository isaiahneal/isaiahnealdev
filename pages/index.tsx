import Head from 'next/head'
import '../styles/globals.css'


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>My Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Isaiah Neal
                </h1>

                <p className="mt-3 text-2xl">
                    I'm a Security Engineer with experience at Siemens, Zip, and the U.S. State Department.
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        href="#"
                        className="p-6 mt-6 text-left border w-72 dark:border-blue-800 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">Siemens &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Cybersecurity Intern
                        </p>
                    </a>

                    <a
                        href="#"
                        className="p-6 mt-6 text-left border w-72 dark:border-blue-800 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">Zip &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Security and Compliance Analyst Intern
                        </p>
                    </a>

                    <a
                        href="#"
                        className="p-6 mt-6 text-left border w-72 dark:border-blue-800 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">State Department &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Security Engineer
                        </p>
                    </a>
                </div>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <a
                    href="https://www.hackthebox.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center">
                    <img src="https://www.hackthebox.com/images/logo600.png" alt="Hack The Box" className="h-12 mx-2"/>
                </a>

                <a
                    href="https://portswigger.net/burp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center">
                    <img src="data:image/png;base64,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" alt="Burp Suite" className="h-12 mx-2"/>
                </a>

                <a
                    href="https://www.hackerone.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center">
                    <img src="https://www.hackerone.com/themes/hacker_one/images/branding/hackerone_logo_white.png" alt="HackerOne" className="h-12 mx-2"/>
                </a>
            </footer>
        </div>
    )
}
