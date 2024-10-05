const posts = [
    {
        id: 1,
        title: 'Cognitive Behavior Therapy(CBT)',
        href: '/reads/1',
        description:
            'What is Cognitive Behavior Therapy (CBT), and How Can It Help Manage Stress?',
        imageUrl:
            '/images/1.png',
        date: 'Mar 16, 2024',
        datetime: '2024-03-16',
    },
    {
        id: 2,
        title: 'StressExterminators Works',
        href: '/reads/2',
        description:
            'Why StressExterminators Works Specifically for New Zealand Youth',
        imageUrl:
            '/images/2.png',
        date: 'Mar 17, 2024',
        datetime: '2024-03-17',
    },
    {
        id: 3,
        title: 'Young People Need Stress Management',
        href: '/reads/3',
        description:
            'Why do young people need stress management',
        imageUrl:
            '/images/3.png',
        date: 'Mar 18, 2024',
        datetime: '2024-03-18',
    },
    // More posts...
]

export default function Reads() {
    return (
        <div className="bg-blue-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to StressExterminators</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        – Your Partner in Youth Stress Management
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                        >
                            <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.date}
                                </time>
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
