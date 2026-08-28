// GOOGLE MAPS / PLACES
// ---------------------------------------------------------------------------
// Powers the address autocomplete on the quiz contact forms. Nothing loads
// from Google until a real API key is set below, and the address fields
// work as plain text inputs in the meantime, so this is safe to ship first.
//
// To activate: in Google Cloud Console create (or pick) a project, enable
// "Maps JavaScript API" and "Places API (New)", create an API key, and
// RESTRICT it: Application restrictions -> Websites ->
// https://njforeclosureguide.org/* ; API restrictions -> the two APIs above.
// Then paste the key here. The key is public by design (it ships to the
// browser); the website restriction is what keeps it usable only on this
// site.
// ---------------------------------------------------------------------------

export const GOOGLE_MAPS_API_KEY: string | null = null;
