const SUPABASE_URL = "https://hyxpwmpmyrzthmabpfxi.supabase.co";
const SUPABASE_ANON_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5eHB3bXBteXJ6dGhtYWJwZnhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3MTExMDMsImV4cCI6MjEwNjI4NzEwM30.ysHGvh2T19oC36LvL6tnZf5maJCYYliy7Kr1srCjmpU";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Dados usados no cabeçalho do PDF da cotação.
const COMPANY_PHONE = "+258 86 085 5896";
const COMPANY_EMAIL = "comercial@dynamicserviceslda.com";
