import { ScrollToTop } from '@/components/ui/scroll-to-top';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <ScrollToTop />
        </>
    );
}
