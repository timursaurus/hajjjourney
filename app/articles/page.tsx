/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w4lAH7rLrAd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary py-12 md:py-20">
        <div className=" px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl">
              Explore the Spiritual Journey of Umra and Hajj
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Discover the profound meaning and significance of these sacred
              pilgrimages in Islam.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </header>
      <div className=" grid px-10 grid-cols-1 gap-8 py-12 md:grid-cols-[1fr_300px] md:gap-12 md:py-20">
        <main>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article className="group rounded-lg border bg-background shadow-sm transition-all hover:border-accent hover:shadow-md">
            <Link href="/articles/2">
                <Image
                  src="/landing2.jpg"
                  width={300}
                  height={200}
                  alt="Article Image"
                  className="h-[200px] w-full rounded-t-lg object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent">
                  <Link href="/articles/1">The Significance of Umra</Link>
                </h3>
                <p className="mt-2 text-muted-foreground line-clamp-3">
                  Umra is a voluntary pilgrimage to Mecca that can be performed
                  at any time of the year. It is a spiritual journey that allows
                  Muslims to connect with their faith and seek forgiveness from
                  Allah.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center font-medium text-accent hover:underline hover:underline-offset-4"
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
            <article className="group rounded-lg border bg-background shadow-sm transition-all hover:border-accent hover:shadow-md">
            <Link href="/articles/2">
                <Image
                  src="/landing3.jpg"
                  width={300}
                  height={200}
                  alt="Article Image"
                  className="h-[200px] w-full rounded-t-lg object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent">
                  <Link href="/articles/2">The Pilgrimage of Hajj</Link>
                </h3>
                <p className="mt-2 text-muted-foreground line-clamp-3">
                  Hajj is the annual Islamic pilgrimage to Mecca, the holiest
                  city in Islam. It is a mandatory religious duty for Muslims
                  that must be performed at least once in their lifetime.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center font-medium text-accent hover:underline hover:underline-offset-4"
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
            <article className="group rounded-lg border bg-background shadow-sm transition-all hover:border-accent hover:shadow-md">
            <Link href="/articles/2">
                <Image
                  src="/landing.jpg"
                  width={300}
                  height={200}
                  alt="Article Image"
                  className="h-[200px] w-full rounded-t-lg object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent">
                  <Link href="/articles/2">
                    The Spiritual Significance of Umra and Hajj
                  </Link>
                </h3>
                <p className="mt-2 text-muted-foreground line-clamp-3">
                  Umra and Hajj are not just physical journeys, but also deeply
                  spiritual experiences that allow Muslims to reconnect with
                  their faith and seek forgiveness and guidance from Allah.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center font-medium text-accent hover:underline hover:underline-offset-4"
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
            <article className="group rounded-lg border bg-background shadow-sm transition-all hover:border-accent hover:shadow-md">
            <Link href="/articles/2">
                <Image
                  src="/landing.jpg"
                  width={300}
                  height={200}
                  alt="Article Image"
                  className="h-[200px] w-full rounded-t-lg object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent">
                  <Link href="/articles/3">
                    The Rituals and Practices of Umra and Hajj
                  </Link>
                </h3>
                <p className="mt-2 text-muted-foreground line-clamp-3">
                  Umra and Hajj involve a series of rituals and practices that
                  are deeply rooted in Islamic tradition and history.
                  Understanding these rituals is crucial for a meaningful
                  spiritual experience.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center font-medium text-accent hover:underline hover:underline-offset-4"
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
            <article className="group rounded-lg border bg-background shadow-sm transition-all hover:border-accent hover:shadow-md">
            <Link href="/articles/2">
                <Image
                  src="/landing.jpg"
                  width={300}
                  height={200}
                  alt="Article Image"
                  className="h-[200px] w-full rounded-t-lg object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent">
                  <Link href="/articles/2">
                    The History and Origins of Umra and Hajj
                  </Link>
                </h3>
                <p className="mt-2 text-muted-foreground line-clamp-3">
                  Umra and Hajj have a rich history that dates back to the time
                  of Prophet Muhammad (peace be upon him). Understanding the
                  origins and evolution of these pilgrimages is crucial for a
                  deeper appreciation of their significance.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center font-medium text-accent hover:underline hover:underline-offset-4"
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
            <article className="group rounded-lg border bg-background shadow-sm transition-all hover:border-accent hover:shadow-md">
              <Link href="/articles/2">
                <Image
                  src="/landing.jpg"
                  width={300}
                  height={200}
                  alt="Article Image"
                  className="h-[200px] w-full rounded-t-lg object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent">
                  <Link href="/articles/2">
                    The Spiritual and Personal Benefits of Umra and Hajj
                  </Link>
                </h3>
                <p className="mt-2 text-muted-foreground line-clamp-3">
                  Performing Umra and Hajj can have profound spiritual and
                  personal benefits for Muslims, including spiritual
                  purification, increased faith, and a renewed sense of purpose
                  and connection with the divine.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center font-medium text-accent hover:underline hover:underline-offset-4"
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>
        </main>
        <aside className="rounded-lg border bg-background p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-card-foreground">
            Categories
          </h2>
          <nav className="mt-4 space-y-2">
            <Link
              href="#"
              className="flex items-center justify-between text-muted-foreground hover:text-accent"
              prefetch={false}
            >
              <span>Umra</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between text-muted-foreground hover:text-accent"
              prefetch={false}
            >
              <span>Hajj</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between text-muted-foreground hover:text-accent"
              prefetch={false}
            >
              <span>Rituals and Practices</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between text-muted-foreground hover:text-accent"
              prefetch={false}
            >
              <span>History and Origins</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between text-muted-foreground hover:text-accent"
              prefetch={false}
            >
              <span>Spiritual Benefits</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </nav>
        </aside>
      </div>
    </div>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
