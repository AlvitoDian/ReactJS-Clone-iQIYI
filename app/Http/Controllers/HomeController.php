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
        $posterBaseUrl = env('TMDB_POSTER_URL');
        $backdropBaseUrl = env('TMDB_BACKDROP_URL');

        $client = new Client();

        //? Get Popular Movies
        $responsePopular = $client->get(env('TMDB_BASE_URL') . 'movie/popular', [
            'query' => [
                'api_key' => env('TMDB_API_KEY'),
            ],
        ]);

        $popularMovies = json_decode($responsePopular->getBody(), true)['results'];

        foreach ($popularMovies as &$movie) {
            $movie['poster_url'] = $posterBaseUrl . $movie['poster_path'];
            $movie['backdrop_url'] = $backdropBaseUrl . $movie['backdrop_path'];
        }

        //? Get Now Playing Movies
        $responseNowPlaying = $client->get(env('TMDB_BASE_URL') . 'movie/now_playing', [
            'query' => [
                'api_key' => env('TMDB_API_KEY'),
                'page' => 2,
            ],
        ]);

        $nowPlayingMovies = json_decode($responseNowPlaying->getBody(), true)['results'];

        foreach ($nowPlayingMovies as &$movie) {
            $movie['poster_url'] = $posterBaseUrl . $movie['poster_path'];
            $movie['backdrop_url'] = $backdropBaseUrl . $movie['backdrop_path'];
        }

        //? Get Upcoming Movies
        $responseUpcomingMovies = $client->get(env('TMDB_BASE_URL') . 'movie/upcoming', [
            'query' => [
                'api_key' => env('TMDB_API_KEY'),
            ],
        ]);

        $upComingMovies = json_decode($responseUpcomingMovies->getBody(), true)['results'];

        foreach ($upComingMovies as &$movie) {
            $movie['poster_url'] = $posterBaseUrl . $movie['poster_path'];
            $movie['backdrop_url'] = $backdropBaseUrl . $movie['backdrop_path'];
        }

        //? Get Popular Actor
        $responsePopularActor = $client->get(env('TMDB_BASE_URL') . 'person/popular', [
            'query' => [
                'api_key' => env('TMDB_API_KEY'),
            ],
        ]);

        $popularActors = json_decode($responsePopularActor->getBody(), true)['results'];

        foreach ($popularActors as &$actor) {
            $actor['profile_url'] = $backdropBaseUrl . $actor['profile_path'];
        }

        //? Render Page
        return Inertia::render('Home', [
            'popularMovies' => $popularMovies,
            'nowPlayingMovies' => $nowPlayingMovies,
            'popularActors' => $popularActors,
            'upComingMovies' => $upComingMovies,
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
        $posterBaseUrl = env('TMDB_POSTER_URL');
        $backdropBaseUrl = env('TMDB_BACKDROP_URL');

        $client = new Client();

        //? Get Current Movie
        $responseMovie = $client->get(env('TMDB_BASE_URL') . 'movie/' . $id, [
            'query' => [
                'api_key' => env('TMDB_API_KEY'),
            ],
        ]);

        $movie = json_decode($responseMovie->getBody(), true);

        //? Get Recom/Popular Movies
        $responsePopular = $client->get(env('TMDB_BASE_URL') . 'movie/popular', [
            'query' => [
                'api_key' => env('TMDB_API_KEY'),
            ],
        ]);

        $popularMovies = json_decode($responsePopular->getBody(), true)['results'];

        $popularMovies = array_slice($popularMovies, 0, 16);

        foreach ($popularMovies as &$movie) {
            $movie['poster_url'] = $posterBaseUrl . $movie['poster_path'];
            $movie['backdrop_url'] = $backdropBaseUrl . $movie['backdrop_path'];
        }

        //? Get Actors on Current Movie
        $responseCredits = $client->get(env('TMDB_BASE_URL') . 'movie/' . $id . '/credits', [
            'query' => [
                'api_key' => env('TMDB_API_KEY'),
            ],
        ]);

        $credits = json_decode($responseCredits->getBody(), true);

        $cast = [];

        foreach ($credits['cast'] as $actor) {
            $actor['profile_url'] = $posterBaseUrl . $actor['profile_path'];

            $responseActorCredits = $client->get(env('TMDB_BASE_URL') . 'person/' . $actor['id'] . '/movie_credits', [
                'query' => [
                    'api_key' => env('TMDB_API_KEY'),
                ],
            ]);

            $actorCredits = json_decode($responseActorCredits->getBody(), true);

            $recentMovies = array_slice($actorCredits['cast'], 0, 2);

            $actor['recent_movies'] = $recentMovies;

            $cast[] = $actor;
        }

        $movie['cast'] = $cast;

        //? Render Page
        return Inertia::render('SingleMovie', [
            'movie' => $movie,
            'posterUrl' => env('TMDB_POSTER_URL'),
            'popularMovies' => $popularMovies,
        ]);
    }

    public function singleActor($id)
    {
        $posterBaseUrl = env('TMDB_POSTER_URL');
        $backdropBaseUrl = env('TMDB_BACKDROP_URL');

        $client = new Client();

        //? Get Actor
        $responseActor = $client->get(env('TMDB_BASE_URL') . 'person/' . $id, [
            'query' => [
                'api_key' => env('TMDB_API_KEY'),
            ],
        ]);

        $actor = json_decode($responseActor->getBody(), true);
        $actor['profile_url'] = $posterBaseUrl . $actor['profile_path'];

        //? Get Movie by Actor
        $portoActor = [];
        $responsePorto = $client->get(env('TMDB_BASE_URL') . 'person/' . $id . '/movie_credits', [
            'query' => [
                'api_key' => env('TMDB_API_KEY'),
            ],
        ]);

        $porto = json_decode($responsePorto->getBody(), true);

        foreach ($porto['cast'] as $porto) {
            $porto['poster_url'] = $posterBaseUrl . $porto['poster_path'];
            $portoActor[] = $porto;
        }

        $portoActor = array_slice($portoActor, 0, 15);

        return Inertia::render('SingleActor', [
            'actor' => $actor,
            'portoActor' => $portoActor,
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
