create table birthday_images (
  id uuid default uuid_generate_v4() primary key,
  url text not null,
  title text,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
); 