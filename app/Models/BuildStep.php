<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class BuildStep extends Model
{
    use CrudTrait;
    protected $fillable = [
        'image',
        'title',
        'created_at',
        'photos',
    ];
}
