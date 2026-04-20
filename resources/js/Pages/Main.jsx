import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome({ products = [] }) {
    const [activeTab, setActiveTab] = useState('Semua');
    const [activeType, setActiveType] = useState('satuan');
    const [configuringBox, setConfiguringBox] = useState(null);
    const [selectedBoxItems, setSelectedBoxItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart);

    const addToCart = (product) => {
        
   
        if (product.tipe === 'satuan') {
            const existingItem = cart.find(item => item.id === product.id && item.type === 'satuan');
            
            if (existingItem) {
                setCart(cart.map(item => 
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                ));
            } else {
                setCart([...cart, { 
                    id: product.id,
                    kode_produk: product.kode_produk,
                    nama: product.nama,
                    harga: product.harga,
                    gambar: product.gambar,
                    type: product.tipe,
                    qty: 1,
                    uniqueId: Date.now(),
                    contents: product.tipe === 'paket' ? selectedBoxItems : []
                }]);
            }
        } else {
            const itemUntukKeranjang = {
                id: product.id,
                kode_produk: product.kode_produk,
                nama: product.nama,
                harga: product.harga,
                gambar: product.gambar, // Tetap bawa gambar agar UI bagus
                type: product.tipe,
                qty: 1,
                uniqueId: Date.now(),
                contents: product.tipe === 'paket' ? selectedBoxItems : []
            };
            setCart([...cart, itemUntukKeranjang]);
            setConfiguringBox(null);
        }

    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.harga * item.qty, 0);
    };
    const removeFromCart = (itemToRemove) => {
    // Filter berdasarkan uniqueId agar jika ada 2 box yg sama, yang terhapus cuma satu
    setCart(cart.filter(item => (item.uniqueId || item.id) !== (itemToRemove.uniqueId || itemToRemove.id)));
    };

    const renderContentsText = (contentIds) => {
    if (!contentIds || contentIds.length === 0) return "";
    
    // Hitung kemunculan tiap donat
    const counts = {};
    contentIds.forEach(id => {
        const product = products.find(p => p.id === id);
        if (product) {
            counts[product.nama] = (counts[product.nama] || 0) + 1;
        }
    });
    // Ubah jadi teks: "2x Choco, 1x Matcha"
    return Object.entries(counts)
        .map(([nama, qty]) => `${qty}x ${nama}`)
        .join(", ");
    };

    const toggleFavorite = (id) => {
        setFavorites(prev => 
            prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
        );
    };

    const handleAddProduct = (product) => {
        if (product.tipe === 'satuan') {
            // Placeholder untuk keranjang satuan
           
            addToCart(product);
        } else {
            setConfiguringBox(product);
            setSelectedBoxItems([]);
        }
    };

    const toggleItemInBox = (id) => {
        if (selectedBoxItems.length < configuringBox.jumlah_pilihan) {
            setSelectedBoxItems([...selectedBoxItems, id]);
        } else {
            alert("Kotak sudah penuh!");
        }
    };

    const filteredProducts = products.filter((product) => {
        const matchType = product.tipe === activeType;
        const matchCategory = activeTab === 'Semua' || product.kategori === activeTab;
        return matchType && matchCategory;
    });
 
    if(activeTab === 'all'){
        products.map((product) => {
            console.log(product.nama);
        })
    }

    return (
        <div className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container font-body">
            <Head title="Dollin Donuts | Glaze & Grain">
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <style>{`
                    .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
                    .material-symbols-outlined.fill-1 { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
                    body { font-family: 'Be Vietnam Pro', sans-serif; }
                    h1, h2, h3, .brand-font { font-family: 'Plus Jakarta Sans', sans-serif; }
                `}</style>
            </Head>

            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-[#fef6e7]/80 dark:bg-[#322e25]/80 backdrop-blur-xl shadow-sm dark:shadow-none">
                <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                    <span className="text-2xl font-bold tracking-tight text-[#76543d] dark:text-[#fef6e7] brand-font">The Artisan Pâtisserie</span>
                    <div className="hidden md:flex items-center gap-8">
                        <a className="text-[#76543d] font-bold border-b-2 border-[#76543d] pb-1 body-md transition-opacity duration-300" href="#menu">Menu</a>
                        <a className="text-[#76543d]/70 dark:text-[#dcd4c0]/70 hover:text-[#76543d] body-md transition-opacity duration-300" href="#order">Order Now</a>
                        <a className="text-[#76543d]/70 dark:text-[#dcd4c0]/70 hover:text-[#76543d] body-md transition-opacity duration-300" href="#contact">Contact</a>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Tombol Login/Dashboard yang terhubung ke sistem */}
                        <Link href="/login" className="text-[#76543d] font-bold hover:opacity-80">Login</Link>
                        <button className="hover:opacity-80 transition-opacity duration-300 active:scale-95 duration-200">
                            <span className="material-symbols-outlined text-[#76543d] dark:text-[#dcd4c0]">shopping_bag</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold mb-6">Feeling Fluffy</span>
                        <h1 className="text-6xl md:text-7xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight">
                            Artisanal <br /> <span className="text-secondary">Dollin Donuts</span>
                        </h1>
                        <p className="text-lg text-on-surface-variant max-w-md mb-10 leading-relaxed">
                            Hand-crafted daily with premium grains and silky glazes. Experience the soft, doughy texture of the legendary Digital Pâtisserie.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2" href="#menu">
                                Browse the Menu
                                <span className="material-symbols-outlined">arrow_downward</span>
                            </a>
                            <button className="px-8 py-4 bg-surface-container-high text-primary rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
                                <span className="material-symbols-outlined">chat</span>
                                Chat with a Baker
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-container/30 blur-[100px] rounded-full"></div>
                        <div className="relative rounded-xl overflow-visible">
                            <img alt="Artisanal Donuts" className="w-full h-auto rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrQXTNQRjy9iAj6jbUyFeki3pTXgakRUi48LI64uLb4uNLHeH0gYY2xErg3Ok0fNxfrDsPfWdhcAKlNKDGJw0Z5k3hxwhLR-q9vxtuhXiDDdjYxVeGoUw3XA6wAUmptzAItE49w2j7m6ejqVNL9wNcypZmpJsdMYhe3THB_NcyJPEZT4dZIIeQMUrgCBQwc0oIqpk-TvUdcJUGJfZisvzE17pnpySODmhe7C2AM7UzbT3kLl8-_jNWE9-VNs0d6qPN3Ea4m7Wewf6L" />
                        </div>
                    </div>
                </div>
            </section>
                
            {/* Menu Section */}
            <section className="py-24 px-8 bg-surface-container-low" id="menu">
           
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-primary mb-4">Our Signature Selection</h2>
                        <p className="text-on-surface-variant">The finest textures from our bakery to your doorstep.</p>
                    </div>
                    {/* Satuan dan Paketan */}

                    <div className='max-w-md mx-auto py-4 mb-12'>
                        <h3 className='text-sm font-black text-primary/60 mb-4 text-center uppercase tracking-widest'>
                            Pilih Pengalaman Belanja
                        </h3>
                        
                        <div className='relative bg-surface-container p-1.5 rounded-2xl flex items-center shadow-inner group'>
                            {/* Latar Belakang Melayang (Animasi) */}
                            <div 
                                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-primary rounded-xl shadow-lg transition-all duration-500 ease-out z-0 ${activeType === 'paket' ? 'translate-x-[100%]' : 'translate-x-0'}`}
                            ></div>

                            <button 
                                onClick={() => setActiveType('satuan')}
                                className={`relative z-10 flex-1 py-3.5 rounded-xl font-black text-sm transition-colors duration-300 flex items-center justify-center gap-2 ${activeType === 'satuan' ? 'text-on-primary' : 'text-on-surface-variant hover:text-primary'}`}
                            >
                                <span className="material-symbols-outlined text-xl">bakery_dining</span>
                                Beli Satuan
                            </button>

                            <button 
                                onClick={() => setActiveType('paket')}
                                className={`relative z-10 flex-1 py-3.5 rounded-xl font-black text-sm transition-colors duration-300 flex items-center justify-center gap-2 ${activeType === 'paket' ? 'text-on-primary' : 'text-on-surface-variant hover:text-primary'}`}
                            >
                                <span className="material-symbols-outlined text-xl">inventory_2</span>
                                Beli Paketan
                            </button>
                        </div>
                    </div>
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <button onClick={() => setActiveTab('Semua')} className={`px-6 py-2 rounded-full ${activeTab === 'Semua' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-secondary-container'} transition-colors font-medium`}>Semua Varian</button>
                        <button onClick={() => setActiveTab('donuts')} className={`px-6 py-2 rounded-full ${activeTab === 'donuts' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-secondary-container'} transition-colors font-medium`}>Donuts</button>
                        <button onClick={() => setActiveTab('mochi')} className={`px-6 py-2 rounded-full ${activeTab === 'mochi' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-primary-container'} transition-colors font-medium`}>Mochi</button>
                        <button onClick={() => setActiveTab('susu')} className={`px-6 py-2 rounded-full ${activeTab === 'susu' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-primary-container'} transition-colors font-medium`}>Susu</button>
                        <button onClick={() => setActiveTab('minuman')} className={`px-6 py-2 rounded-full ${activeTab === 'minuman' ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-tertiary-container'} transition-colors font-medium`}>Minuman</button>
                    </div>
                    {/* Bento Grid Menu */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                        {filteredProducts.length === 0 ? (
                            <div className="text-center">
                                <p className="text-on-surface-variant">Tidak ada produk</p>
                            </div>
                        ) : (
                            filteredProducts.map((product) =>{
                                return(
                                    <div key={product.id} className="group relative bg-surface-container-lowest rounded-[24px] p-3 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 border border-transparent hover:border-primary/10">
                                        {/* Favorite Button Overlay */}
                                        <button 
                                            onClick={() => toggleFavorite(product.id)}
                                            
                                            className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-90"
                                        >
                                            <span className={`material-symbols-outlined text-[20px] transition-colors ${favorites.includes(product.id) ? 'fill-1 text-red-500' : 'text-on-surface-variant'}`}>
                                                favorite
                                            </span>
                                        </button>

                                        {/* Product Image */}
                                        <div className="aspect-square mb-4 overflow-hidden rounded-[20px] bg-surface-container-low">
                                            <img 
                                                alt={product.nama} 
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                                                src={product.gambar} 
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="px-1">
                                            <div className="flex flex-col mb-3">
                                                <h3 className="text-sm font-bold text-primary line-clamp-1 group-hover:text-secondary transition-colors">{product.nama}</h3>
                                                <p className="text-[11px] text-on-surface-variant line-clamp-1 opacity-70 italic">{product.deskripsi}</p>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <span className="text-base font-black text-primary">
                                                    Rp {Number(product.harga).toLocaleString('id-ID')}
                                                </span>
                                                <button 
                                                    onClick={() => handleAddProduct(product)}
                                                    className="w-full py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-on-primary rounded-xl text-[11px] font-black transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95"
                                                >
                                                    <span className="material-symbols-outlined text-sm">
                                                        {product.tipe === 'paket' ? 'grid_view' : 'add_shopping_cart'}
                                                    </span>
                                                    {product.tipe === 'paket' ? 'Pilih Isi Box' : 'Tambah'}
                                                </button>
                                            </div>
                                        </div>   
                                    </div>
                                    
                                )
                            })
                        )}
                    </div>
                </div>
            </section>

            {/* Order Section */}
            <section className="py-24 px-8" id="order">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* KIRI: Daftar Belanja */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-3xl font-black text-primary italic">Detail Pesanan</h2>
                        {cart.length === 0 ? (
                            <div className="p-10 bg-surface-container rounded-3xl text-center border-2 border-dashed border-on-surface-variant/20">
                                <p className="text-on-surface-variant">Keranjang belanja masih kosong...</p>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div key={item.uniqueId || item.id} className="bg-white p-5 rounded-3xl border border-on-surface-variant/10 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group hover:shadow-md hover:border-primary/20 transition-all">
                                    <div className="flex gap-4 items-center w-full">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-2xl text-primary font-black text-lg flex items-center justify-center">
                                            {item.qty}x
                                        </div>
                                        
                                        <div className="flex-1 flex gap-4 items-center">
                                            {/* Thumbnail / Gambar Utama */}
                                            <img src={item.gambar} alt={item.nama} className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-cover shadow-sm bg-surface-container" />

                                            <div className="flex flex-col justify-center py-1">
                                                <h4 className="font-bold text-primary text-base md:text-lg leading-tight">{item.nama}</h4>
                                                {item.type === 'paket' && (
                                                    <div className="mt-2 flex flex-col gap-1.5">
                                                        {/* Avatar Donat Kecil */}
                                                        <div className="flex -space-x-2.5">
                                                            {Array.from(new Set(item.contents)).slice(0, 5).map((id, index) => {
                                                                const product = products.find(p => p.id === id);
                                                                return product ? (
                                                                    <img key={index} src={product.gambar} alt={product.nama} className="w-6 h-6 md:w-7 md:h-7 rounded-full object-cover shadow-sm border-[1.5px] border-white" />
                                                                ) : null;
                                                            })}
                                                            {new Set(item.contents).size > 5 && (
                                                                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-surface-container border-[1.5px] border-white flex items-center justify-center text-on-surface-variant font-bold text-[9px] shadow-sm z-10">
                                                                    +{new Set(item.contents).size - 5}
                                                                </div>
                                                            )}
                                                        </div>
                                                        {/* Keterangan Teks */}
                                                        <p className="text-[11px] md:text-xs text-on-surface-variant italic leading-relaxed max-w-[220px] md:max-w-sm m-0">
                                                            {renderContentsText(item.contents)}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 w-full sm:w-auto justify-end border-t sm:border-none border-on-surface-variant/10 pt-4 sm:pt-0">
                                        <span className="font-black text-primary text-lg">Rp {(item.harga * item.qty).toLocaleString('id-ID')}</span>
                                        <button onClick={() => removeFromCart(item)} className="p-2.5 text-red-400 hover:bg-red-50 hover:text-red-500 rounded-xl transition-colors flex items-center justify-center border border-transparent hover:border-red-100">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* KANAN: Form Pemesan */}
                    <div className="bg-surface-container rounded-3xl p-8 h-fit sticky top-24">
                        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Data Pengiriman</h2>
                        <form className="space-y-4">
                            {/* Input Nama, Telp, Alamat di sini */}
                            <div className="pt-6 border-t-2 border-dashed border-on-surface-variant/20 mt-6">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-on-surface-variant font-bold">Total Pembayaran</span>
                                    <span className="text-2xl font-black text-primary">Rp {calculateTotal().toLocaleString('id-ID')}</span>
                                </div>
                                <button className="w-full py-5 bg-primary text-on-primary rounded-2xl font-black text-lg hover:-translate-y-1 transition-all shadow-xl shadow-primary/20 cursor-pointer">
                                    Pesan Sekarang via WhatsApp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* MODAL PEMBANGUN KOTAK */}
            {configuringBox && (
                <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="bg-white w-full max-w-2xl rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300">
                        {/* Header Modal */}
                        <div className="p-6 border-b border-on-surface-variant/10 flex justify-between items-center bg-orange-50">
                            <div>
                                <h2 className="text-2xl font-bold text-primary">{configuringBox.nama}</h2>
                                <p className="text-sm font-semibold text-on-surface-variant">
                                    Pilih {configuringBox.jumlah_pilihan} donat favoritmu ({selectedBoxItems.length}/{configuringBox.jumlah_pilihan})
                                </p>
                            </div>
                            <button onClick={() => setConfiguringBox(null)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* List Donat yang tersedia untuk Paket ini */}
                        <div className="p-6 max-h-[50vh] overflow-y-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                            {(configuringBox.package_items || []).map(item => (
                                <div 
                                    key={item.id} 
                                    onClick={() => toggleItemInBox(item.id)}
                                    className={`cursor-pointer group flex flex-col items-center p-3 rounded-2xl border-2 transition-all relative ${selectedBoxItems.filter(id => id === item.id).length > 0 ? 'border-primary bg-primary/5 shadow-md scale-105' : 'border-transparent bg-gray-50 hover:bg-gray-100'}`}
                                >
                                    <div className="relative">
                                        <img src={item.gambar} className="w-20 h-20 rounded-full object-cover shadow-sm mb-2 group-hover:scale-110 transition-transform" />
                                        {/* Counter per item */}
                                        {selectedBoxItems.filter(id => id === item.id).length > 0 && (
                                            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-bounce-short">
                                                {selectedBoxItems.filter(id => id === item.id).length}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-[10px] font-black text-center text-primary uppercase leading-tight">{item.nama}</span>
                                </div>
                            ))}
                        </div>

                        {/* Footer Modal */}
                        <div className="p-6 bg-gray-50 border-t border-on-surface-variant/10 flex flex-col gap-4">
                        {/* Progress Bar Mini */}
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-full transition-all duration-300" 
                                    style={{ width: `${(selectedBoxItems.length / configuringBox.jumlah_pilihan) * 100}%` }}
                                ></div>
                        </div>

                            <div className="flex justify-between items-center">
                                <button onClick={() => setSelectedBoxItems([])} className="text-red-500 font-bold text-sm hover:underline">Reset Pilihan</button>
                                <button 
                                    disabled={selectedBoxItems.length !== configuringBox.jumlah_pilihan}
                                    onClick={() => {
                                        addToCart(configuringBox);
                                    }}
                                    className={`px-8 py-3 rounded-xl font-black text-sm transition-all shadow-lg ${selectedBoxItems.length === configuringBox.jumlah_pilihan ? 'bg-primary text-white hover:-translate-y-1' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                >
                                    Konfirmasi Isi Box
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="w-full py-12 px-8 bg-[#dcd4c0] dark:bg-[#25211a] text-[#76543d] dark:text-[#fef6e7]" id="contact">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                    <div>
                        <span className="text-lg font-bold text-[#76543d] brand-font">Dollin Donuts</span>
                        <p className="text-xs uppercase tracking-widest mt-2">Feeling Fluffy.</p>
                    </div>
                    <div className="flex justify-center gap-6">
                        <a className="text-[#76543d]/60 dark:text-[#dcd4c0]/60 hover:text-[#76543d] dark:hover:text-[#fef6e7] underline decoration-2 underline-offset-4 text-xs uppercase tracking-widest" href="#">Instagram</a>
                        <a className="text-[#76543d]/60 dark:text-[#dcd4c0]/60 hover:text-[#76543d] dark:hover:text-[#fef6e7] underline decoration-2 underline-offset-4 text-xs uppercase tracking-widest" href="#">Facebook</a>
                        <a className="text-[#76543d]/60 dark:text-[#dcd4c0]/60 hover:text-[#76543d] dark:hover:text-[#fef6e7] underline decoration-2 underline-offset-4 text-xs uppercase tracking-widest" href="#">Twitter</a>
                    </div>
                    <div className="md:text-right">
                        <p className="text-xs font-semibold">© 2026 Dollin Donuts. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}