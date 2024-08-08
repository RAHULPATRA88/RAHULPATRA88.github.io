/**
 * v0 by Vercel.
 * @see https://v0.dev/t/f7wVStmC9AE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary-foreground">
        <div className="container px-4 md:px-6 text-center text-primary-foreground">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl animate-cursor">John Doe</h1>
            <h2 className="text-2xl font-medium sm:text-3xl animate-cursor-blink">Frontend Developer</h2>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl">
              I'm a passionate frontend developer with a strong focus on creating beautiful and user-friendly web
              applications.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Projects
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work and see what I can do.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 1"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
              />
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-muted-foreground">Lorem ipsum</p>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Code
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 2"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
              />
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="text-muted-foreground">Lorem ipsum</p>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Code
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Project 3"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
              />
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">Lorem ipsum</p>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Code
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the technologies I'm proficient in.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-background rounded-lg">
              <HashIcon className="w-12 h-12" />
              <h3 className="text-xl font-bold">HTML</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-background rounded-lg">
              <CodepenIcon className="w-12 h-12" />
              <h3 className="text-xl font-bold">CSS</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-background rounded-lg">
              <CodepenIcon className="w-12 h-12" />
              <h3 className="text-xl font-bold">JavaScript</h3>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-background rounded-lg">
              <CodepenIcon className="w-12 h-12" />
              <h3 className="text-xl font-bold">React</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind? Let's chat!
            </p>
          </div>
          <form className="max-w-md mx-auto mt-8 space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}

function CodepenIcon(props) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function HashIcon(props) {
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
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
}
