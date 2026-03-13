import { useState, useEffect } from 'react';
import { Project, ProjectsResponse } from '@/types/portfolio';

export function useProjects(category?: string) {
  const [projects, setProjects] = useState<Project[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const url = category 
          ? `http://127.0.0.1:8000/api/portfolio/projects/${encodeURIComponent(category)}/`
          : 'http://127.0.0.1:8000/api/portfolio/projects/';
        
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch projects');
        
        const data: ProjectsResponse = await res.json();
        setProjects(data.results || data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [category]);

  return { projects, loading, error, refetch: () => location.reload() };
}

