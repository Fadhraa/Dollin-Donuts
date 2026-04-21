<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BranchStock extends Model
{
    // Cukup kasih tahu kolom mana yang boleh diisi
    protected $fillable = ['product_id', 'branch_id', 'stock'];
}
