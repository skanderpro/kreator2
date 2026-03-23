<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use CrudTrait;
    protected $fillable = [
        'title',
        'content',
        'image',
        'excerpt',
        'cover',
        'created_at',
    ];
}
