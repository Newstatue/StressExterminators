import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const people = [
    {
        name: 'Dr. Emma Watson',
        role: 'Expertise: Marine Biology',
        imageUrl:
            '/images/xinli1.jpg',
        bio: 'Dr. Emma Watson is a renowned marine biologist from Auckland, New Zealand. She has dedicated her career to studying the impact of climate change on marine ecosystems. With over 15 years of experience, Dr. Watson has published numerous research papers on coral reef conservation and the behavior of marine mammals. Her passion for the ocean has led her to become an advocate for sustainable fishing practices and marine protected areas.',
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Professor John Smith',
        role: 'Expertise: Astrophysics',
        imageUrl:
            '/images/xinli2.jpg',
        bio: 'Professor John Smith is a leading astrophysicist at the University of Canterbury in Christchurch, New Zealand. His research focuses on the study of black holes and the evolution of galaxies. Professor Smith has received several awards for his groundbreaking work in the field, including the prestigious Royal Society Te Apārangi Medal. He is also an enthusiastic science communicator, regularly giving public lectures to inspire the next generation of astronomers.',
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Dr. Sarah Johnson',
        role: 'Expertise: Environmental Engineering',
        imageUrl:
            '/images/xinli3.jpg',
        bio: 'Dr. Sarah Johnson is an environmental engineer based in Wellington, New Zealand. She specializes in developing innovative solutions for waste management and renewable energy. Dr. Johnson has been instrumental in designing waste-to-energy plants that help reduce landfill waste and greenhouse gas emissions. Her commitment to sustainability has earned her recognition as one of New Zealand’s top environmental engineers.',
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Mr. Michael Brown',
        role: 'Expertise: Agriculture and Horticulture',
        imageUrl:
            '/images/xinli4.jpg',
        bio: 'Mr. Michael Brown is a respected agricultural and horticultural expert from Hastings, New Zealand. With over 20 years of experience in the industry, he has become a leader in developing sustainable farming practices. Mr. Brown is particularly known for his work in organic fruit production and the implementation of precision agriculture techniques. His expertise has helped many farmers in New Zealand improve their crop yields while reducing environmental impact.',
        xUrl: '#',
        linkedinUrl: '#',
    },
    // More people...
]

export default function Page() {
    return (
        <>
        <div className="bg-blue-50 py-24 md:py-32 lg:py-40">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About us</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        At StressExterminators, we pride ourselves on being a dedicated team of New Zealand school psychologists committed to enhancing the mental well-being of young people across the nation. Our diverse team is comprised of highly qualified professionals who specialize in cognitive behaviour therapy (CBT) and have extensive experience working with students in various educational settings.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <img alt="" src={person.imageUrl} className="aspect-[3/2] w-full rounded-2xl object-cover" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                            <p className="text-base leading-7 text-gray-600">{person.role}</p>
                            <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
                            <ul role="list" className="mt-6 flex gap-x-6">
                                <li>
                                    <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">X</span>
                                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
                                            <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5">
                                            <path
                                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}
