<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\Hash;

use App\Models\User;

class UsersExample extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@socasa.com',
            'password' => Hash::make('123456789'),
            'isAdmin' => 1,
        ]);

        User::create([
            'name' => 'lector',
            'email' => 'luisgarcia@socasa.com',
            'password' => Hash::make('123456789'),
            'isAdmin' => 0,
        ]);
    }
}
