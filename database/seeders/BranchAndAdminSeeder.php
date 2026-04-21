<?php

namespace Database\Seeders;

use App\Models\Branch;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

class BranchAndAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Buat Cabangnya
        $cabang1 = Branch::create(['nama' => 'Dollin Merr Rungkut', 'alamat' => 'Jl. Gn. Anyar Lor Gg. III No.31b, Gn. Anyar, Kec. Gn. Anyar, Surabaya, Jawa Timur 60294']);
        $cabang2 = Branch::create(['nama' => 'Dollin Sudirman', 'alamat' => 'Jl. Putat Jaya Lebar C No. 11, Putat Jaya, Kec. Sawahan, Surabaya, Jawa Timur 61322']);
        // 2. Buat User Admin Cabang 1
        User::create([
            'name' => 'Admin Dollin 1',
            'email' => 'dollin_admin1@gmail.com',
            'password' => Hash::make('dollin_123'),
            'role' => 'staff',
            'branch_id' => $cabang1->id,
        ]);
        // 3. Buat User Admin Cabang 2
        User::create([
            'name' => 'Admin Dollin 2',
            'email' => 'dollin_admin2@gmail.com',
            'password' => Hash::make('dollin_123'),
            'role' => 'staff',
            'branch_id' => $cabang2->id,
        ]);
    }
}
