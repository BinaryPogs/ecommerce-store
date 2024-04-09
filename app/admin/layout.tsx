import Nav from "@/components/navbar/Nav";
import NavLink from "@/components/navbar/NavLink";

export const dynamic = "force-dynamic"

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <>
    <Nav>
      <NavLink href="/admin">Dashboard</NavLink>
      <NavLink href="/admin/products">Products</NavLink>
      <NavLink href="/admin/users">Customers</NavLink>
      <NavLink href="/admin/sales">Sales</NavLink>
    </Nav>
    <div className="container my-6">{children}</div>
  </>
);

export default AdminLayout;