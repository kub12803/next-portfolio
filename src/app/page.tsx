import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Nav from '@/components/ui/nav';
import Link from 'next/link';
import { Link as LinkIcon } from 'lucide-react';
import { TypographyH2, TypographyLarge } from '@/components/typography/headings';
import { TechIcon, TechIcons } from '@/components/tech-icons';
import { Certificate, CertificateIcon } from '@/components/certificate-icons';
import { ShieldCheck } from 'lucide-react';

const techStack: TechIcon[] = [
  {displayName: 'HTML5', srcName: 'html5'},
  {displayName: 'CSS3', srcName: 'css3'},
  {displayName: 'JavaScript', srcName: 'javascript'},
  {displayName: 'Typescript', srcName: 'typescript'},
  {displayName: 'React', srcName: 'react'},
  {displayName: 'Nextjs', srcName: 'nextjs'},
  {displayName: 'Bootstrap', srcName: 'bootstrap'},
  {displayName: 'Material-UI', srcName: 'material-ui'},
  {displayName: 'Tailwind', srcName: 'tailwind'},
  {displayName: 'Django', srcName: 'django'}
];

const portfolioTechStack: TechIcon[] = [
  {displayName: 'Nextjs', srcName: 'nextjs'},
  {displayName: 'Typescript', srcName: 'typescript'},
  {displayName: 'Tailwind', srcName: 'tailwind'},
];

const certificates: Certificate[] = [
  {
    displayName: 'CS50x', 
    imageSrc: 'harvard-logo', 
    href: 'https://certificates.cs50.io/a8e5aa84-b4e9-4bf7-896c-fd359f80befa.pdf?size=letter',
    description: 'Harvard university\'s\ introduction to the intellectual enterprises of computer science and the art of programming.',
    date_received: new Date("2022").getFullYear().toString()
  },
  {
    displayName: 'CS50w', 
    imageSrc: 'harvard-logo', 
    href: 'https://certificates.cs50.io/a23d55f5-13bf-4e6d-a055-d48f327bb369.pdf?size=letter',
    description: 'Course pickups where CS50x lefts off, diving more deeply into the design and implementation of web applications.',
    date_received: new Date("2023").getFullYear().toString()
  }
];

export default function Home() {
  return (
    <main className="sm:container">
      <Nav />
      <section id="home" className="mt-[3rem] p-1 h-[calc(100vh-3rem)]">
        <div className="flex h-full items-center md:justify-evenly sm:flex-col md:flex-row">
          <div className="flex flex-col space-y-2">
            <Card className="relative">
              <CardHeader>
                <CardTitle>About</CardTitle>
                <Avatar className="absolute right-10 top-5">
                      <AvatarImage src="avatar/memoji.jpeg" />
                      <AvatarFallback>BK</AvatarFallback>
                    </Avatar>
              </CardHeader>
              <CardContent>
                  <TypographyH2>Hi, I'm <span className="text-primary">Ben</span></TypographyH2>
                  <TypographyLarge><span className="text-destructive">Aspiring Software Developer</span></TypographyLarge>
                  <CardDescription className="py-6 max-w-md">
                    Wrapping up my final semester in Mechanical Engineering. 
                    I have passion for learning new technologies to ultimately provide efficient solutions for building applications.
                  </CardDescription>
              </CardContent>
              <CardFooter className="pb-2">
                <LinkIcon />&nbsp;Links
              </CardFooter>
              <CardContent>
                <i className="flex">
                  <Link href="https://www.linkedin.com/in/benybku" target="_blank" rel="noopener noreferrer">
                    <Image src="icons/brand/linkedin.svg" alt="linkedin" width={48} height={48} />
                  </Link>
                  <Link href="https://github.com/kub12803" target="_blank" rel="noopener noreferrer">
                    <Image src="icons/brand/github.svg" alt="github" width={48} height={48} />
                  </Link>
                </i>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex"><ShieldCheck />&nbsp;Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Hover over to view more details!</CardDescription>
                <div className="flex mt-4 space-x-2">
                  {certificates.map((certificate, index) => (
                    <CertificateIcon key={index} displayName={certificate.displayName} imageSrc={certificate.imageSrc} href={certificate.href} description={certificate.description} date_received={certificate.date_received} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col space-y-2">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Technologies I have used to build applications.</CardDescription>
                <div className="grid grid-cols-5 gap-4 mt-6">
                  {techStack.map((tech, index) => (
                    <TechIcons key={index} displayName={tech.displayName} srcName={tech.srcName} />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>My Portfolio Utilizes...</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2 mt-1">
                  {portfolioTechStack.map((tech, index) => (
                    <TechIcons key={index} displayName={tech.displayName} srcName={tech.srcName} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}