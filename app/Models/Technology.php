<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class Technology extends Model
{
    use CrudTrait;
    protected $fillable = ['title', 'description', 'image'];
}
