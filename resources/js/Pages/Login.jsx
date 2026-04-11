import { Link, useForm } from "@inertiajs/react";




export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="bg-background font-body text-on-surface overflow-x-hidden">
            <div className="w-full h-screen flex justify-center items-center">
                <div className="flex w-full max-w-[1000px] mx-10 p-8 rounded-lg  justify-between gap-12 lg:gap-24">
                    <form onSubmit={handleSubmit} className="w-full max-w-[440px] flex flex-col">

                        <h1 className="font-headline text-5xl font-black tracking-tight text-on-surface mb-3">Selamat Datang Kembali</h1>
                        <p className="font-body text-base text-on-surface mb-8">Silahkan login untuk melanjutkan</p>
                        {/* form login */}
                        <div className="flex flex-col gap-2">
                            <label className="text-on-surface font-semibold px-1" htmlFor="Email">Email</label>
                            <input
                            className="w-full h-16 px-6 rounded-xl bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline transition-all"
                            placeholder="Masukan email anda" 
                            required
                            value={data.email}
                            type="email"
                            onChange={(e) => setData('email', e.target.value)} />

                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-on-surface font-semibold px-1" htmlFor="password">Password</label>
                            <input
                            className="w-full h-16 px-6 rounded-xl bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline transition-all"
                            placeholder="Masukan password anda" 
                            required
                            value={data.password}
                            type="password" onChange={(e) => setData('password', e.target.value)} />
                        </div>
                        <div>
                            <button 
                            type="submit"
                            disabled={processing}
                            className=" mt-6 w-full h-16 bg-primary text-on-primary font-headline font-bold text-lg rounded-xl hover:bg-primary-dim transition-all shadow-lg shadow-primary/10">
                                Sign In
                            </button>
                        </div>
                 
                    </form>
                    <div className=" group relative lg:flex flex-1 items-center justify-center w-full ">
                        <div className="max-w-[500px] w-full h-full overflow-hidden rounded-2xl shadow-lg shadow-primary/10">
                             <img className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANbxNm_wFh5GzoZJnLeNYUH1UZ8LH0lCx4oZJSp3_-XUvVLBk2HrG-JY58oEVIa3aT9fOiChXFAgqmb0LEz_3cKpW-A6oBfUuJhZfT-k7FU49rSzrpan7WKkJu5r36poNyitj6_JiO1bspflU5d9AWI31wzymFosUhNuFprrTNX7bhN65DlVHuFXUdnVwQIEihKJ7uLX6wKr9fC0ScR4NlC2MK5RJMU-_-M7cfmh9SGfid_su0IXeUgW_6tVEbWQe7Q_QbtvyIrHqA" alt="" />
                        </div>
                        <div className="
                        absolute bottom-[-100px] group-hover:bottom-0 
                        transition-all duration-300 ease-in-out
                        rounded-b-2xl
                        left-0 w-full h-1/4 bg-gradient-to-t from-background to-transparent"/>
                        <div className="
                        absolute bottom-0 right-0 z-10 bg-white p-4 max-w-[200px] rounded-l-2xl 
                        ">
                            <p className="text-xs font-bold text-on-surface leading-tight">"The fluffiest mochi donut I've ever tasted!"</p>
                            <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest font-semibold">— Sarah J.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}