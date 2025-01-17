import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: '404 not found | ROGIX Activity'
  }

export default async function Notfound() {
    return (
        <main className="text-center min-h-max">
            <p className="font-serif text-4xl hero glitch layers overflow-hidden" data-text="404 | Not found"><span>404 | Not found</span></p>
        </main>
    );
};