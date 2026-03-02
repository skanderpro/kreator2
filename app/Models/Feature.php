<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    use CrudTrait;
    protected $fillable = ['title', 'image'];
}
