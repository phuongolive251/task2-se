export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Tran Mai Phuong. All rights reserved.
        </p>
        <p className="text-xs">Built with React, TailwindCSS, and love.</p>
      </div>
    </footer>
  );
}
export default SiteFooter;
