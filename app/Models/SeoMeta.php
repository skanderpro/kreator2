<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string|null $title
 * @property string $rule
 * @property string $hint
 * @property string|null $description
 * @property string|null $keywords
 * @property string|null $og_title
 * @property string|null $og_description
 * @property string|null $og_image
 * @property string|null $og_url
 * @property string|null $canonical
 * @property Carbon $created_at
 */
class SeoMeta extends Model
{
    use CrudTrait;

    protected $fillable = ['title', 'rule', 'hint', 'description', 'keywords', 'og_title', 'og_description', 'og_image', 'og_url', 'canonical'];

    public static function getMetaForPage(string $path)
    {
        $metas = SeoMeta::all();
        foreach ($metas as $meta) {
            if (preg_match('/' . $meta->rule . '/is', $path)) {
                return $meta;
            }
        }

        return null;
    }
}
