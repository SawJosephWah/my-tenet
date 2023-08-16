import { createClient } from '@supabase/supabase-js';

let projectURL = 'https://nqketyehrnnhircdlpzk.supabase.co';
let apiKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xa2V0eWVocm5uaGlyY2RscHprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2MTAxNzIsImV4cCI6MjAwNjE4NjE3Mn0.Z0O_nCWefu1kHIxDWe5EVeUvS3ougGanJEv2JhoGQF8';
const supabase = createClient(projectURL, apiKEY);

export default supabase;
