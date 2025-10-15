// src/services/UserService.ts

import type { User } from '@/types';

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simulated data
const usersData: User[] = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', status: 'active' },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com', status: 'active' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', status: 'inactive' },
];

export const UserService = {
  currentUser: null as User | null,

  /**
   * Fetches all users from the (simulated) API.
   * @returns A promise that resolves to an array of users.
   */
  async fetchUsers(): Promise<User[]> {
    console.log('UserService: Fetching users...');
    await delay(500); // Simulate API latency
    return [...usersData]; // Return a copy
  },

  /**
   * Toggles the status of a user.
   * @param id The ID of the user to update.
   * @returns A promise that resolves to the updated user.
   */
  async toggleUserStatus(id: number): Promise<User> {
    console.log(`UserService: Toggling status for user ${id}`);
    await delay(300); // Simulate API latency

    const userIndex = usersData.findIndex(u => u.id === id);
    if (userIndex === -1) throw new Error('User not found');

    const user = usersData[userIndex];
    const newStatus = user.status === 'active' ? 'inactive' : 'active';
    const updatedUser: User = { ...user, status: newStatus };

    usersData[userIndex] = updatedUser; // Update simulated data

    return updatedUser;
  },

  setCurrentUser(user: User) {
    this.currentUser = user
  }
};