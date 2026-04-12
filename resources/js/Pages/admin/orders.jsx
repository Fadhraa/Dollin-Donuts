import AdminNav from "../layouts/admin_nav";
function Orders() {
    return (
        <>
            <div className="p-8 max-w-7xl mx-auto min-h-screen text-on-surface">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-bold">Orders</h1>
                    <button className="bg-primary text-on-primary px-4 py-2 rounded-xl font-bold">Add Order</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-surface-container p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Order 1</h2>
                        <p className="text-on-surface-variant mb-2">Order ID: 123456789</p>
                        <p className="text-on-surface-variant mb-2">Order Date: 2022-01-01</p>
                        <p className="text-on-surface-variant mb-2">Order Status: Pending</p>
                        <p className="text-on-surface-variant mb-2">Order Total: $123.45</p>
                        <button className="bg-primary text-on-primary px-4 py-2 rounded-xl font-bold">View Order</button>
                    </div>
                </div>
            </div>
        </>
    );
}

Orders.layout = page => <AdminNav children={page} />
export default Orders;