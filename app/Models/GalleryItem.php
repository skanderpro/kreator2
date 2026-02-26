<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class GalleryItem extends Model
{
    use CrudTrait;
    protected $fillable = [
        'image'
    ];
}
