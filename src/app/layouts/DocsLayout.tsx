import { LayoutProps } from "rwsdk/router";

const DocsLayout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-[300px_1fr] size-screen fixed inset-0">
      <header className="col-span-2 px-20 h-14 flex items-center justify-between">
        <div>Header</div>
        <nav>
          <ul>
            <li>
              <a href="/docs">Docs</a>
            </li>
          </ul>
        </nav>
      </header>
      <aside className="pl-20 h-[calc(100vh-56px)] overflow-y-auto">
        Sidebar Nav
      </aside>
      <main className="pr-20 h-[calc(100vh-56px)] overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export { DocsLayout };
