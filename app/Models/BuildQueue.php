<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $title
 * @property int $start_year
 * @property int $end_year
 * @property int $start_quarter
 * @property int $end_quarter
 * @property int $progress
 */
class BuildQueue extends Model
{
    use CrudTrait;
    protected $fillable = [
        'title',
        'start_year',
        'end_year',
        'start_quarter',
        'end_quarter',
        'progress',
    ];
}
