const layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div>
        <h1 className="text-5xl">Root Navbar</h1>
        {children}
    </div>
  )
}

export default layout