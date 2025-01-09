import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ApiKeyTable } from './api-key-table';
// import { getApiKeys } from '@/lib/db';

export default async function HomePage() {
//   const { apiKeys, newOffset, totalApiKeys } = await getApiKeys();

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Create API Key
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        {/* <ApiKeyTable
          apikeys={apikeys}
          offset={newOffset ?? 0}
          totalApiKeys={totalApiKeys}
        /> */}
      </TabsContent>
    </Tabs>
  );
}
