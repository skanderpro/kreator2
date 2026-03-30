<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

class Apartment extends Model
{
    use CrudTrait;
    protected $fillable = ['created_at', 'floor_old', 'title', 'type', 'sold', 'features', 'planing_type', 'parking_count', 'area', 'living_area', 'rooms', 'building', 'section', 'floor', 'price', 'price_for_meter', 'plan', 'floor_plan', 'gen_plan'];

    protected $casts = [
        'floor' => 'json',
    ];
}
