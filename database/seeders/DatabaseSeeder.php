<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents; // Import added

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Klien
        User::create([
            'name' => 'Dollin Donuts Admin',
            'email' => 'dollin_donuts@gmail.com',
            'password' => Hash::make('dollin_123'),
            'role' => 'client',
        ]);

        // Developer
        User::create([
            'name' => 'ZyvaraTech Admin',
            'email' => 'zyvaratech.id@gmail.com',
            'password' => Hash::make('zyvaratech123'),
            'role' => 'developer',
        ]);
    }
}
