import AdminNav from "../layouts/admin_nav";
function Transaction() {
    return (
        <>
            <div className="p-8 max-w-7xl mx-auto min-h-screen text-on-surface">
                <h1 className="text-4xl font-bold mb-6">Transaction</h1>
            </div>
        </>
    );
}

Transaction.layout = page => <AdminNav children={page} />
export default Transaction;