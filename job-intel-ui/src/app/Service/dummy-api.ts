import { httpResource } from '@angular/common/http';
import { Service, Signal } from '@angular/core';

export interface Job {
  id: number;
  title: string;
  location: string;
  companyName: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  jobUrl: string;
  postedDate: string;
  skills: string[];
}

interface JobResponse {
  jobs: Job[];
}
@Service()
export class DummyApi {
  private readonly localJsonUrl = '/data/users.json';

  getUsers(search: Signal<string>) {
    return httpResource<Job[]>(() => {
      const query = search().trim().toLowerCase();

      return {
        url: this.localJsonUrl,

        // Value available while the HTTP request is loading.
        defaultValue: [],

        // Convert UsersResponse to User[] and filter by name.

        parse: (response: JobResponse) => {
          if (!query) {
            return response.jobs;
          }

          return response.jobs.filter((job) => job.title.toLowerCase().includes(query));
        },
      };
    });
  }
}
