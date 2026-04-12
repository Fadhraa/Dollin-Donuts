import AdminNav from "../layouts/admin_nav";
function Products() {
    return (
        <>
            <div className="p-8 max-w-7xl mx-auto min-h-screen text-on-surface">
                <h1 className="text-4xl font-bold mb-6">Products</h1>
            </div>
        </>
   
    );
}

Products.layout = page => <AdminNav children={page} />
export default Products;