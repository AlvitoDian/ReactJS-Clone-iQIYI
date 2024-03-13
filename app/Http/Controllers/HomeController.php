<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $client = new Client();

        $responsePopular = $client->get(env('TMDB_BASE_URL') . 'movie/popular', [
            'query' => [
                'api_key' => env('TMDB_API_KEY'),
            ],
        ]);

        $responseNowPlaying = $client->get(env('TMDB_BASE_URL') . 'movie/now_playing', [
            'query' => [
                'api_key' => env('TMDB_API_KEY'),
                'page' => 2,
            ],
        ]);

        $popularMovies = json_decode($responsePopular->getBody(), true)['results'];

        $nowPlayingMovies = json_decode($responseNowPlaying->getBody(), true)['results'];

        $posterBaseUrl = env('TMDB_POSTER_URL');
        $backdropBaseUrl = env('TMDB_BACKDROP_URL');

        foreach ($popularMovies as &$movie) {
            $movie['poster_url'] = $posterBaseUrl . $movie['poster_path'];
            $movie['backdrop_url'] = $backdropBaseUrl . $movie['backdrop_path'];
        }

        foreach ($nowPlayingMovies as &$movie) {
            $movie['poster_url'] = $posterBaseUrl . $movie['poster_path'];
            $movie['backdrop_url'] = $backdropBaseUrl . $movie['backdrop_path'];
        }

        return Inertia::render('Home', [
            'popularMovies' => $popularMovies,
            'nowPlayingMovies' => $nowPlayingMovies,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $client = new Client();

        $response = $client->get(env('TMDB_BASE_URL') . 'movie/' . $id, [
            'query' => [
                'api_key' => env('TMDB_API_KEY'),
            ],
        ]);

        $movie = json_decode($response->getBody(), true);

        $posterBaseUrl = env('TMDB_POSTER_URL');
        $backdropBaseUrl = env('TMDB_BACKDROP_URL');
        $movie['poster_url'] = $posterBaseUrl . $movie['poster_path'];
        $movie['backdrop_url'] = $backdropBaseUrl . $movie['backdrop_path'];
        

        return Inertia::render('SingleMovie', [
            'movie' => $movie,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
