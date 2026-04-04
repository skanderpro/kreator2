<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class ContentPage extends Model
{
    use CrudTrait;

    protected $fillable = ['title', 'content', 'slug',];
}
